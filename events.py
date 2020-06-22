#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Tue Jun 16 10:37:53 2020

@author: mauricio
"""

#TODO
# maybe title is not necessary?
# id probably needs to be saved on external file
# add possibility to ommit ec_details (done ?)
# add getters

# imports
import pandas as pd

from error_classes import *


# Base class for economic events
class EcEvent(object):
    
    current_id = -1
    @staticmethod
    def new_id():
        EcEvent.current_id += 1
        return (EcEvent.current_id, 0)

    @staticmethod
    def handle_missing_title():
        return "Unnamed"
	
    def __new__(cls, *args, **kwargs):
        
        if cls == EcEvent:
            raise NotImplementedError("Events must be created with a subclass")
        
        obj = super(EcEvent, cls).__new__(cls)
        obj.id = cls.new_id()
        
        return obj

    def __init__(self,
            title = None,
            first = None, third = None,
            timestamp = None,
            description = None, product = None,
            total_price = None, quantity = None,
            unity_price = None):

        self._undefined_details = set()


        if not product:
            raise MissingEssentialInfo(
                    "Att. 'product' was not defined",
                    info_name = "product")
        else:
            self.product = product

        self.first_party = None
        self.third_party = None

        self.set_parties(first, third)

        self.timestamp = None
        self.description = None

        self.set_timestamp(timestamp)
        self.set_description(description)

        self.title = None
        self.set_title(title)

        self.set_ec_details(unity_price, quantity, total_price)

        self.set_value()

    def set_title(self, title):

        if title and type(title) == str:
            self.title = title
            self.get_undefined_details(title = True)
        else:
            common = self.handle_missing_title()
            self.title = common + "/id:" + str(self.id)
            self.get_undefined_details(title = False)
    
    def set_parties(self, first, third):
        
        if first and type(first) == str:
            #After company class is defined, test if it corresponds
            #In the GUI, limit the options
            self.first_party = first
        elif first:
            self.get_undefined_details(first = False)
            raise InvalidInput(
                "Company input was invalid",
                input = first,
                info_name = "first"
                )
        else:
            self.get_undefined_details(first = False)
            raise MissingImportantInfo(
                "Att. 'first_party' was not defined",
                info_name = "first")

        if third and type(third) == str:
            self.third_party = third
        elif third:
            self.get_undefined_details(third = False)
            raise InvalidInput(
                "Third-party company input was invalid",
                input = third,
                info_name = "third"
                )
        else:
            self.get_undefined_details(third = False)
            raise MissingImportantInfo(
                "Att. 'third_party' was not defined",
                info_name = "third")

    def set_timestamp(self, timestamp, date_format = "%d-%m-%Y"):

        if timestamp:
            try:
                timestamp.date

                self.timestamp = timestamp
                self.get_undefined_details(timestamp = True)
            except AttributeError:
                try:
                    self.timestamp = pd.Timestamp(timestamp)
                    self.get_undefined_details(timestamp = True)
                except (ValueError, TypeError):
                    raise InvalidInput(
                        "Timestamp input was invalid",
                        input = timestamp,
                        info_name = "timestamp"
                        )
        else:
            self.timestamp = None
            self.get_undefined_details(timestamp = False)
            raise MissingImportantInfo
    
    def set_description(self, description):

        if description:
            if type(description) != str:
                raise InvalidInput(
                    "Description input was invalid",
                    input = description,
                    info_name = "description"
                    )
            else:
                self.description = description
                self.get_undefined_details(description = True)
        else:
            self.description = None
            self.get_undefined_details(description = False)

    def set_ec_details(self,
            unity_price = None, quantity = None, total_price = None):

        undefined = 0
        for x in [unity_price, quantity, total_price]:
            try:
                float(x)
            except ValueError:
                raise InvalidInput(
                        "EcDetail input was invalid",
                        input = (unity_price, quantity, total_price),
                        info_name = "ec_detail"
                        )            
            except TypeError:
                undefined += 1
        if undefined > 1:
            self.get_undefined_details(ec_details = False)
            raise MissingEssentialInfo(
                "EcDetail is missing info",
                info_name = "ec_detail")

        if not unity_price:
            self.quantity = quantity
            self.total_price = total_price
            self.unity_price = total_price/quantity
        elif not quantity:
            self.unity_price = unity_price
            self.total_price = total_price
            self.quantity = total_price/unity_price
        else:
            self.unity_price = unity_price
            self.quantity = quantity
            self.total_price = unity_price*quantity
            
        self.get_undefined_details(ec_details = True)
    
    def set_value(self):
        if "ec_details" not in self._undefined_details:
            self.value = self._ec_value * self.total_price
        else:
            self.value = None
    
    def get_undefined_details(self, **kwargs):
        
        if kwargs:
            for key in kwargs:
                if kwargs[key]:
                    try:
                        self._undefined_details.remove(key)
                    except KeyError:
                        pass
                else:
                    self._undefined_details.add(key)
            return self._undefined_details
        else:
            raise UserWarning("g.u.d. called without arguments")
    
    def get_attribute(self, att):

        dic = vars(self)

        if not att in dic.keys():
            raise InfoNotDefined(att, info_name = att)
        else:
            return dic[att]

    def get_attributes(self, att_list):

        r_list = []
        for att in att_list:
            r_list.append(self.get_attribute(att))
        
        return r_list

    


class Sale(EcEvent):

    _type = "Sale"
    _ec_value = 1

    @staticmethod
    def new_id():
        return (*EcEvent.new_id(), 0)

    def handle_missing_title(self):
        return "Sale:" + self.product

    def __init__(self, **kwargs):

        super().__init__(self, **kwargs)

class Purchase(EcEvent):

    _type = "Purchase"
    _ec_value = -1

    @staticmethod
    def new_id():
        return (*EcEvent.new_id(), 1)

    def handle_missing_title(self):
        return "Purchase:" + self.product

    def __init__(self, **kwargs):

        super().__init__(self, **kwargs)

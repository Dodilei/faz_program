#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Tue Jun 16 10:37:53 2020

@author: mauricio
"""

#TODO
# maybe title is not necessary?
# add errors
# id probably needs to be saved on external file
# add possibility to ommit ec_details

# imports
import datetime as dt


# Base class for economic events
class EcEvent(object):
    
    current_id = -1
    @staticmethod
    def new_id():
        current_id += 1
        return (current_id, 0)

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
            title = None, timestamp = None,
            description = None, product = None,
            total_price = None, quantity = None,
            unity_price = None):

        self._undefined_details = set()

        self.title = None
        self.timestamp = None
        self.description = None

        self.set_timestamp(timestamp)
        self.set_title(title)
        self.set_description(description)

        if not product:
            #TODO add error
            pass
        else:
            self.product = product

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

    def set_timestamp(self, timestamp, date_format = "%d-%m-%Y"):

        if timestamp:
            try:
                self.timestamp = dt.datetime.strptime(timestamp, date_format)
                self.get_undefined_details(timestamp = True)
            #TODO add error
            except:
                self.timestamp = None
                self.get_undefined_details(timestamp = False)
        else:
            self.timestamp = None
            self.get_undefined_details(timestamp = False)
    
    def set_description(self, description):

        if description:
            if type(description) != str:
                #TODO add error
                pass
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
                undefined += 1
        if undefined > 1:
            self.get_undefined_details(ec_details = False)
            pass#TODO add error

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
                    self._undefined_details.remove(key)
                else:
                    self._undefined_details.add(key)
            return self._undefined_details
        else:
            #TODO add error
            pass
    


class Sale(EcEvent):

    _type = "Sale"
    _ec_value = 1

    @staticmethod
    def new_id():
        return (*super().new_id(), 0)

    def handle_missing_title(self):
        return "Sale:" + self.product

    def __init__(
        self, product, quantity = None,
        total_price = None, unity_price = None,
        **kwargs):

        super().__init__(self, **kwargs)

class Purchase(EcEvent):

    _type = "Purchase"
    _ec_value = -1

    @staticmethod
    def new_id():
        return (*super().new_id(), 1)

    def handle_missing_title(self):
        return "Purchase:" + self.product

    def __init__(
        self, product, quantity = None,
        total_price = None, unity_price = None,
        **kwargs):

        super().__init__(self, **kwargs)

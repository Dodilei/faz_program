#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Tue Jun 16 10:37:53 2020

@author: mauricio
"""

#TODO
# maybe title is not necessary?
# add errors
# think if there's more classes other than Sale and Purchase


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

    def __init__(self, title = None, timestamp = None, description = None):

        self.undefined_details = set()

        self.title = None
        self.timestamp = None
        self.description = None

        self.set_timestamp(timestamp)
        self.set_title(title)
        self.set_description(description)

    def set_title(self, title):

        if title and type(title) == str:
            self.title = title
            self.get_undefined_details(title = True)
        else:
            common = self.handle_missing_title()
            self.title = common + "/id:" + str(self.id)
            self.get_undefined_details(title = False)

    def set_timestamp(self, timestamp):

        if timestamp:
            try:
                self.timestamp = dt.datetime(timestamp)
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
        else:
            self.description = None
            self.get_undefined_details(description = False)

    def get_undefined_details(self, **kwargs):
        
        if kwargs:
            for key in kwargs:
                if kwargs[key]:
                    self.undefined_details.remove(key)
                else:
                    self.undefined_details.add(key)
            return self.undefined_details
        else:
            #TODO add error
            pass
        



# Sales/Buy

# Product
# Total price
# Unit price
# Quantity

class Sale(EcEvent):

    _type = "Sale"

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

        # implement custom error
        self.product = product

        # implement info setting on parent class
        self.set_sale_

    

        # think how to implement set title for subclasses (maybe wrapper?)
        # work of undefined details should be done by parent
        # title and timestamp too

# imports
import datetime as dt


# Base class for economic events
class EcEvent(object):

    def __init__(self, id, title = None, timestamp = None):

        self.id = id
        self.undefined_details = set()

        self.title = None
        self.timestamp = None

        self.set_timestamp(timestamp)
        self.set_title(title)

    def set_title(self, title):

        if title and type(title) == str:
            self.title = title
            self.get_undefined_details(title = True)
        else:
            self.title = "Unnamed /id:" + str(self.id)
            self.get_undefined_details(title = False)

    def set_timestamp(self, timestamp):

        if timestamp:
            try:
                self.timestamp = dt.datetime(timestamp)
                self.get_undefined_details(timestamp = True)
            except:
                self.timestamp = None
                self.get_undefined_details(timestamp = False)
        else:
            self.timestamp = None
            self.get_undefined_details(timestamp = False)

    def get_undefined_details(self, **kwargs):
        
        if kwargs:
            for key in kwargs:
                if kwargs[key]:
                    self.undefined_details.remove(key)
                else:
                    self.undefined_details.add(key)
            return self.undefined_details

        try:
            if self.title == None:
                self.undefined_details.add("title")
            else:
                self.undefined_details.remove("title")
        except NameError:
            self.undefined_details.add("title")

        return self.undefined_details

# MissingEssentialInfo
# InfoNotDefined
# InvalidInput

# add MissingImportantInfo

class WarningErrors(Exception):

    def __init__(self, message, *args, **kwargs):

        super().__init__(self, message)

        self.args = args
        self.kwargs = kwargs

class MissingEssentialInfo(WarningErrors):

    def __init__(self, *args, **kwargs):

        super().__init__(self, *args, **kwargs)

        try:
            self.info_name = kwargs["info_name"]
        except Exception:
            self.info_name = None

class MissingImportantInfo(WarningErrors):

    def __init__(self, *args, **kwargs):

        super().__init__(self, *args, **kwargs)

        try:
            self.info_name = kwargs["info_name"]
        except Exception:
            self.info_name = None

class InfoNotDefined(WarningErrors):

    def __init__(self, *args, **kwargs):

        super().__init__(self, *args, **kwargs)

class InvalidInput(WarningErrors):

    def __init__(self, *args, **kwargs):

        super().__init__(self, *args, **kwargs)

        try:
            self.input = kwargs["input"]
        except Exception:
            self.input = None

        
        try:
            self.info_name = kwargs["info_name"]
        except Exception:
            self.info_name = None
        

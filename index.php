<!DOCTYPE html>
<html>
    <head>
        <title>Calculator</title>
        <link rel="stylesheet" type="text/css" href="css/style.css" />
        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
        <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div id="container">
                        <input id="display" type="text" name="display" readonly/>
                        <div class="table-responsive">
                            <table id="buttonbody" class="table-condensed">
                                <tr>
                                    <td><input id="button7" type="button" name="button7" value="7" /></td>
                                    <td><input id="button8" type="button" name="button8" value="8" /></td>
                                    <td><input id="button9" type="button" name="button9" value="9" /></td>
                                    <td><input id="buttondivide" type="button" name="buttondivide" value="&divide;" /></td>
                                </tr>
                                <tr>
                                    <td><input id="button4"type="button" name="button4" value="4" /></td>
                                    <td><input id="button5" type="button" name="button5" value="5" /></td>
                                    <td><input id="button6" type="button" name="button6" value="6" /></td>
                                    <td><input id="buttonmultiply" type="button" name="buttonmultiply" value="&times;"/></td>
                                </tr>
                                <tr>
                                    <td><input id="button1" type="button" name="button1" value="1" /></td>
                                    <td><input id="button2" type="button" name="button2" value="2" /></td>
                                    <td><input id="button3" type="button" name="button3" value="3" /></td>
                                    <td><input id="buttonsubtract" type="button" name="buttonsubtract" value="&minus;"/></td>
                                </tr>
                                <tr>
                                    <td><input id="button0" type="button" name="button0" value="0" /></td></td>
                                    <td><input id="buttondecimal"type="button" name="buttondecimal" value="." /></td>
                                    <td><input id="buttonaddition"type="button" name="buttonaddition" value="+" /></td>
                                    <td><input id="buttonequals" type="button" name="buttonequals" value="="/></td>
                                </tr>
                                <tr>
                                    <td><input id="buttonclear" type="button" name="buttonclear" value="C" /></td>
                                    <td><input id="buttonbackspace" type="button" name="buttonbackspace" value="B"/></td>
                                    <td><input id="buttonnegative" type="button" name="buttonnegative" value="M" /></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            <div/>
        </div>
        <script type="text/javascript" src="js/jquery.js"></script>
        <script type="text/javascript" src="js/main.js" /></script>
    </body>
</html>
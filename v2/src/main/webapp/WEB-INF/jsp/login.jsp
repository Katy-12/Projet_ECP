<!DOCTYPE html>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@page import="javax.servlet.http.HttpServletRequest"%>
<html lang="en">
<head>

</head>
<body>
        <form action="/login" method="post">
                Email:<input type="text" name="email" /><br />
                Password:<input type="password" name="password" /><br /> <br />

                <input type="submit" value="login" />
        </form>
</body>
</html>

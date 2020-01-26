<!DOCTYPE html>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@page import="java.util.List"%>
<%@page import="javax.servlet.http.HttpServletRequest"%>
<html lang="en">
<head>
<c:url value="/css/main.css" var="jstlCss" />
<link href="${jstlCss}" rel="stylesheet" />
</head>
<body>
	<%
		List<String> categories = (List<String>) request.getAttribute("list_categories");
	%>
	<form action="/creer_compte" method="post">
		Nom<input type="text" name="nom" /><br /> Prénom<input type="text"
			name="prenom" /><br /> Email:<input type="text" name="email" /><br />
		<select name="categorie">
			<%
				for (String categorie : categories) {
			%>
			<option value="<%=categorie%>"><%=categorie%></option>
			<%
				}
			%>

		</select> <br /> Password:<input type="password" name="password" /><br /> <br />

		<input type="submit" value="login" />
		<%=request.getAttribute("list_categories")%>
	</form>
</body>
</html>

package com.ecp.controlleurs;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.ecp.dao.UtilisateurDao;
import com.ecp.entities.CategorieUtilisateur;
import com.ecp.entities.Proche;
import com.ecp.entities.Professionnel;
import com.ecp.entities.Psychologue;
import com.ecp.entities.Utilisateur;

@Controller
public class UtilisateurController {

	// inject via application.properties
	@Value("${welcome.message:test}")
	private String message = "Hello World";
	
	private static String attributSessionUtilisateur = "utilisateur";

	@RequestMapping("/")
	public String welcome(Map<String, Object> model) {
		model.put("message", this.message);
		return "accueil";
	}
	
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String getPageLogin(HttpServletRequest request) {
		HttpSession session = request.getSession(true);
		Utilisateur utilisateur = (Utilisateur) session.getAttribute(attributSessionUtilisateur);
		if(utilisateur != null) {
			return utilisateur.getCategorie().name().toLowerCase();
		}
		return "login";
	}
	
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public String login(HttpServletRequest request) {
		// Todo valider les donnees
		Utilisateur utilisateur = UtilisateurDao.login(request.getParameter("email"), request.getParameter("password"));
		if(utilisateur == null) {
			// todo 
			return "error";
		}
		request.getSession(true).setAttribute(attributSessionUtilisateur, utilisateur);
		// TODO
		/*
		 * if utilisateur est un proche
		 * appel dao pour voir si il a un patient
		 * si il a un  patient
		 * request.setAttribute("patient", patient)
		 * sinon request.setAttribute("patient", null)
		 */
		return utilisateur.getCategorie().name().toLowerCase();
	}

	@RequestMapping(value= "/creer_compte", method = RequestMethod.GET)
	public String getCreateAccountPage(HttpServletRequest request) {
		request.setAttribute("list_categories", UtilisateurDao.getListCategories());
		return "creerCompte";
	}
	
	@RequestMapping(value= "/creer_compte", method = RequestMethod.POST)
	public String createAccount(HttpServletRequest request) {
		CategorieUtilisateur categorie = CategorieUtilisateur.valueOf(request.getParameter("categorie"));
		// TODO valider les donner
		Utilisateur utilisateur = null;
		// TODO hash password before saving it
		switch (categorie) {
		case Psychologue:
			utilisateur = new Psychologue(request.getParameter("email"), request.getParameter("password"), request.getParameter("nom"), request.getParameter("prenom"));
			break;
		case Proche:
			utilisateur = new Proche(request.getParameter("email"), request.getParameter("password"), request.getParameter("nom"), request.getParameter("prenom"), null);
			break;
		case Professionnel:
			utilisateur = new Professionnel(request.getParameter("email"), request.getParameter("password"), request.getParameter("nom"), request.getParameter("prenom"), null);
			break;
		default:
			break;
		}
		UtilisateurDao.ajouterUtilisateur(utilisateur);
		System.out.println(categorie);
		return "login";
	}
}
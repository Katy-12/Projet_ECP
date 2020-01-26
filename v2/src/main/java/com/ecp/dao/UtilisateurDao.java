package com.ecp.dao;

import java.util.ArrayList;
import java.util.List;

import com.ecp.entities.CategorieUtilisateur;
import com.ecp.entities.Proche;
import com.ecp.entities.Professionnel;
import com.ecp.entities.Psychologue;
import com.ecp.entities.Utilisateur;

public class UtilisateurDao {
	
	public static List<String> getListCategories(){
		List<String> categories = new ArrayList<String>();
		for(CategorieUtilisateur categorie : CategorieUtilisateur.values()) {
			categories.add(categorie.name());
		}
		return categories;
	}
	
	public static boolean ajouterUtilisateur(Utilisateur utilisateur){
		// TODO  save in the DB
		return true;
	}
	
	public static Utilisateur login(String email, String password){
		if("1".equals(email)) {
			return new Psychologue("1", "toto", "Toto", "Toto_name");
		}else if("2".equals(email)) {
			return new Professionnel("2", "xxx", "Foo", "Foo_name", "medecin");
		}else if("3".equals(email)) {
			return new Proche("3", "yyyy", "Poo", "Poo_name", "frere");
		}else {
			return null;
		}
	}
}

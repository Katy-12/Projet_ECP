package com.ecp.entities;

public class Psychologue extends Utilisateur{

	public Psychologue(String email, String password, String nom, String prenom) {
		super(email, password, nom, prenom);
		// TODO Auto-generated constructor stub
	}

	@Override
	public CategorieUtilisateur getCategorie() {
		// TODO Auto-generated method stub
		return CategorieUtilisateur.Psychologue;
	}

}

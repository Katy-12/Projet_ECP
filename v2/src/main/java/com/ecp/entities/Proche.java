package com.ecp.entities;

public class Proche extends Utilisateur{
	
	public String lienPatient;

	public Proche(String email, String password, String nom, String prenom, String lienPatient) {
		super(email, password, nom, prenom);
		this.lienPatient = lienPatient;
	}

	@Override
	public CategorieUtilisateur getCategorie() {
		// TODO Auto-generated method stub
		return CategorieUtilisateur.Proche;
	}	
}

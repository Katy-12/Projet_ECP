package com.ecp.entities;

public class Professionnel extends Utilisateur{
	public String profil;

	public Professionnel(String email, String password, String nom, String prenom, String profil) {
		super(email, password, nom, prenom);
		this.profil = profil;
	}

	@Override
	public CategorieUtilisateur getCategorie() {
		// TODO Auto-generated method stub
		return CategorieUtilisateur.Professionnel;
	}
	
}

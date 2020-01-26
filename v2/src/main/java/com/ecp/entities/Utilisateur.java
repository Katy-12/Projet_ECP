package com.ecp.entities;

public abstract class Utilisateur {
	public String email;
	public String password;
	public String nom;
	public String prenom;
	
	public Utilisateur(String email, String password, String nom, String prenom) {
		super();
		this.email = email;
		this.password = password;
		this.nom = nom;
		this.prenom = prenom;
	}
	
	public abstract CategorieUtilisateur getCategorie();
	
}

package com.mkyong.controller;

public class BureauData {
	private int mths_since_last_delinq;
	private int inq_last_6mths;
	private int delinq_2yrs;
	private int ageon_file;
	private double revol_util;
	private int open_acc;
	private int pub_rec;
	private int id;
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getMths_since_last_delinq() {
		return mths_since_last_delinq;
	}
	public void setMths_since_last_delinq(int mths_since_last_delinq) {
		this.mths_since_last_delinq = mths_since_last_delinq;
	}
	public int getInq_last_6mths() {
		return inq_last_6mths;
	}
	public void setInq_last_6mths(int inq_last_6mths) {
		this.inq_last_6mths = inq_last_6mths;
	}
	public int getDelinq_2yrs() {
		return delinq_2yrs;
	}
	public void setDelinq_2yrs(int delinq_2yrs) {
		this.delinq_2yrs = delinq_2yrs;
	}
	public int getAgeon_file() {
		return ageon_file;
	}
	public void setAgeon_file(int ageon_file) {
		this.ageon_file = ageon_file;
	}
	public double getRevol_util() {
		return revol_util;
	}
	public void setRevol_util(double revol_util) {
		this.revol_util = revol_util;
	}
	public int getOpen_acc() {
		return open_acc;
	}
	public void setOpen_acc(int open_acc) {
		this.open_acc = open_acc;
	}
	public int getPub_rec() {
		return pub_rec;
	}
	public void setPub_rec(int pub_rec) {
		this.pub_rec = pub_rec;
	}
	@Override
	public String toString() {
		return "BureauData [mths_since_last_delinq=" + mths_since_last_delinq + ", inq_last_6mths=" + inq_last_6mths
				+ ", delinq_2yrs=" + delinq_2yrs + ", ageon_file=" + ageon_file + ", revol_util=" + revol_util
				+ ", open_acc=" + open_acc + ", pub_rec=" + pub_rec + ", id=" + id + "]";
	} 
	
	
}

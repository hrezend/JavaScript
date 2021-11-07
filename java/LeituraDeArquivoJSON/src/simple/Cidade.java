package simple;

public class Cidade {

    private String nome;
    private String estado;
    private String cep;
    
    public Cidade() {
    	
    }
    
    public Cidade(String nome, String estado, String cep) {
    	this.nome = nome;
    	this.estado = estado;
    	this.cep = cep;
    }

    public String toString() {
    	String res = this.getNome() + "\n" + this.getEstado() + "\n" + this.getCep() + "\n";
    	
    	return res;
    }
    
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }
    
    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }
}
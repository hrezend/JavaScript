package simple;

public class Pessoa {

    private String nome;
    private String cpf;
    private Integer idade;
    private Cidade cidade;

    public Pessoa() {
        this.cidade = new Cidade();
    }
    
    public Pessoa(String nome, String cpf, int idade) {
    	this.nome = nome;
    	this.cpf = cpf;
    	this.idade = idade;
        this.cidade = new Cidade();
    }
    
    public String toString() {
    	String res = this.getNome() + "\n" + this.getCpf() + "\n" + this.getIdade() + "\n" + this.getCidade().toString();
    	
    	return res;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
    
    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public Integer getIdade() {
        return idade;
    }

    public void setIdade(Integer idade) {
        this.idade = idade;
    }

    public Cidade getCidade() {
        return cidade;
    }

    public void setCidade(Cidade cidade) {
        this.cidade = cidade;
    }

}
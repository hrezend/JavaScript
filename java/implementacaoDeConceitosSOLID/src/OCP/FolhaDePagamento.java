package OCP;

public class FolhaDePagamento {
	
	private Double saldo;
	
	public void calcular(Remuneravel contrato) {
		this.saldo = contrato.remuneracao();
		
		System.out.print("Saldo da Folha: " + this.saldo);
	}

	public Double getSaldo() {
		return saldo;
	}

	public void setSaldo(Double saldo) {
		this.saldo = saldo;
	}
	
}
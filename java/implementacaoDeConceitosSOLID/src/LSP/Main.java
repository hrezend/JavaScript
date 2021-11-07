package LSP;

public class Main {

	public static void imprimeNome(A obj) {
		obj.show();
	}
	
	public static void main(String[] args) {
		A a = new A();
		B b = new B();

		imprimeNome(a);
		imprimeNome(b);
	}

}

/* Anotações:
 * Desta forma, a classe derivada "B" pode ser substituida pela sua classe
 * base "A", ou seja, podemos substituilos sem precisar alterar as propriedades.
 */
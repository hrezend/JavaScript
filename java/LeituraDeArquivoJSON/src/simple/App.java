package simple;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;

import com.google.gson.Gson;

public class App {
	
	public void getFirst() {
		try {
			String json = String.join(" ", Files.readAllLines(Paths.get("./src/simple/data.json"),StandardCharsets.UTF_8));
			
			Pessoa pessoa = new Gson().fromJson(json, Pessoa.class);
			
			System.out.println(pessoa.getNome());
	        System.out.println(pessoa.getIdade());
	        System.out.println(pessoa.getCpf());
	        System.out.println(pessoa.getCidade().getNome());
	        System.out.println(pessoa.getCidade().getEstado());
	        System.out.println(pessoa.getCidade().getCep());
		} 
		catch (IOException e) {
			System.out.println("Deu godé...");
			e.printStackTrace();
		}
	}
	
	public void getAll() {
		try {
			String json = String.join(" ", Files.readAllLines(Paths.get("./src/simple/data.json"),StandardCharsets.UTF_8));
			
			Pessoa[] pessoas = new Gson().fromJson(json, Pessoa[].class);
			List <Pessoa> pessoasList = Arrays.asList(pessoas);
			
			System.out.println("VETOR:");
			for(int i = 0; i < pessoas.length; i++) {
				System.out.println(pessoas[i].getNome());
		        System.out.println(pessoas[i].getIdade());
		        System.out.println(pessoas[i].getCpf());
		        System.out.println(pessoas[i].getCidade().getNome());
		        System.out.println(pessoas[i].getCidade().getEstado());
		        System.out.println(pessoas[i].getCidade().getCep());
		        System.out.println("");
			}
			
			System.out.println("LIST:");
			for(int i = 0; i < pessoasList.size(); i++) {
				System.out.println(pessoasList.get(i).toString());
			}
		} 
		catch (IOException e) {
			System.out.println("Deu godé...");
			e.printStackTrace();
		}
	}
}
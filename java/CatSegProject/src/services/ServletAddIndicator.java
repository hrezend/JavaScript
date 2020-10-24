package services;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import models.indicadores;

@WebServlet("/ServletAddIndicator")
public class ServletAddIndicator extends HttpServlet{
	private static final long serialVersionUID = 1L;

	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
            indicadores i = new indicadores();
            request.setCharacterEncoding("utf-8");
            i.setEmployeeID(request.getParameter("employeeID").trim());
            i.setIdade(Integer.parseInt(request.getParameter("idade")));
            i.setQuantidadeDeAdvertencias(Integer.parseInt(request.getParameter("quantidadeDeAdvertencias")));
            i.setQuantidadeDeAcidentes(Integer.parseInt(request.getParameter("quantidadeDeAcidentes")));
            i.setCargaHorariaSemanalDeTrabalho(Integer.parseInt(request.getParameter("cargaHorariaSemanalDeTrabalho")));
            i.setCargaHorariaTotalDeTreinamento(Integer.parseInt(request.getParameter("cargaHorariaTotalDeTreinamento")));
            i.setCargo(request.getParameter("cargo").trim());
            i.setSetor(request.getParameter("setor").trim());
			
			if(i.create()){
				System.out.println("Os indicadores do funcion�rio foram cadastrados!");
				response.setStatus(201);
				response.sendRedirect("ControllerRedirectDashboard");
			}else{
				System.out.println("Erro ao cadastradar os indicadores do funcion�rio.");
				response.setStatus(400);
				response.sendRedirect("ControllerRedirectDashboard");
			}
		}

}
using CapaDatos;
using CapaEntidad;
using CapaNegocio;
using Microsoft.AspNetCore.Mvc;

namespace MiPrimeraAPPAspNetCore.Controllers
{
    public class LaboratorioController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public List<LaboratorioCLS> ListarLaboratorio()
        {
            LaboratorioBL obj = new LaboratorioBL();
            return obj.ListarLaboratorio();
        }

        public List<LaboratorioCLS> FiltrarLaboratorio(LaboratorioCLS objLaboratorio)
        {
            LaboratorioBL obj = new LaboratorioBL ();
            return obj.FiltrarLaboratorio(objLaboratorio);
        }

    }
}

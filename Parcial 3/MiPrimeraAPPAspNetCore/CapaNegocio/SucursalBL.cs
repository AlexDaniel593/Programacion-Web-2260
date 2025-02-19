using CapaDatos;
using CapaEntidad;
using System.Reflection.Metadata.Ecma335;

namespace CapaNegocio
{
    public class SucursalBL
    {
        public List<SucursalCLS> ListarSucursal()
        {
            SucursalDAL sucursalDAL = new SucursalDAL();
            return sucursalDAL.listarSucursales();
        }

        public List<SucursalCLS> FiltrarSucursal(SucursalCLS sucursalCLS)
        {
            SucursalDAL sucursalDAL = new SucursalDAL();
            return sucursalDAL.filtrarSucursal(sucursalCLS);
        }
    }
}
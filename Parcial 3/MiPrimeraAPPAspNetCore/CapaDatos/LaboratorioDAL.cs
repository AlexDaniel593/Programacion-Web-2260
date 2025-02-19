using CapaEntidad;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;

namespace CapaDatos
{
    public class LaboratorioDAL : CadenaDAL
    {
        public List<LaboratorioCLS> listarLaboratorios()
        {
            List<LaboratorioCLS> lista = null;

            using (SqlConnection cn = new SqlConnection(this.cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspListarLaboratorio", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.Text;

                        SqlDataReader dr = cmd.ExecuteReader();

                        if (dr != null)
                        {
                            LaboratorioCLS laboratorio;
                            lista = new List<LaboratorioCLS>();
                            while (dr.Read())
                            {
                                laboratorio = new LaboratorioCLS();
                                laboratorio.idLaboratorio = dr.IsDBNull(0) ? 0 : dr.GetInt32(0);
                                laboratorio.nombre = dr.IsDBNull(1) ? "" : dr.GetString(1);
                                laboratorio.direccion = dr.IsDBNull(2) ? "" : dr.GetString(2);
                                laboratorio.personaContacto = dr.IsDBNull(3) ? "" : dr.GetString(3);

                                lista.Add(laboratorio);
                            }
                        }
                    }
                }
                catch (Exception)
                {
                    cn.Close();
                    lista = null;
                    throw;
                }
            }
            return lista;
        }

        public List<LaboratorioCLS> filtrarLaboratorio(LaboratorioCLS obj)
        {
             List<LaboratorioCLS> lista = null;

            using (SqlConnection cn = new SqlConnection(this.cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspFiltrarLaboratorio", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;

                        cmd.Parameters.AddWithValue("@nombre", obj.nombre == null ? "" : obj.nombre);
                        cmd.Parameters.AddWithValue("@direccion", obj.direccion == null ? "" : obj.direccion);
                        cmd.Parameters.AddWithValue("@personacontacto", obj.personaContacto == null ? "" : obj.personaContacto);

                        SqlDataReader dr = cmd.ExecuteReader();


                        if (dr != null)
                        {
                            LaboratorioCLS olaboratorioCLS;
                            lista = new List<LaboratorioCLS>();
                            while (dr.Read())
                            {
                                olaboratorioCLS = new LaboratorioCLS();
                                olaboratorioCLS.idLaboratorio = dr.IsDBNull(0) ? 0 : dr.GetInt32(0);
                                olaboratorioCLS.nombre = dr.IsDBNull(1) ? "" : dr.GetString(1);
                                olaboratorioCLS.direccion = dr.IsDBNull(2) ? "" : dr.GetString(2);
                                olaboratorioCLS.personaContacto = dr.IsDBNull(3) ? "" : dr.GetString(3);

                                lista.Add(olaboratorioCLS);
                            }
                        }
                    }
                }
                catch (Exception)
                {
                    cn.Close();
                    lista = null;
                    throw;

                }
            }
            return lista;

        }
    }
}

using System;

namespace Resultados
{
    public class Resultado
    {
        public bool Ok{get;set;}
        public string Error{get;set;}
        public int CodigoError{get;set;}
        public string InfoAdicional{get;set;}
        public object Return{get;set;}
    }
}

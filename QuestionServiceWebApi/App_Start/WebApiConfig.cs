﻿using System.Linq;
using System.Web.Http;

namespace QuestionServiceWebApi
{
  public static class WebApiConfig
  {
    public static void Register(HttpConfiguration config)
    {

      config.EnableCors();

      config.Routes.MapHttpRoute(
          name: "DefaultApi",
          routeTemplate: "api/{controller}/{id}",
          defaults: new { id = RouteParameter.Optional }
      );

      var appXmlType = config.Formatters.XmlFormatter.SupportedMediaTypes.FirstOrDefault(t => t.MediaType == "application/xml");
      config.Formatters.XmlFormatter.SupportedMediaTypes.Remove(appXmlType);
    }
  }
}

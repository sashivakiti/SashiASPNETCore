﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace JDAU_DashboardApp.Controllers
{
    public class ReportingController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
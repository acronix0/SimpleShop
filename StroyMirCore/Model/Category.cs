﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SimpleShop.Core.Model
{
    public class Category : BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }
    }
}

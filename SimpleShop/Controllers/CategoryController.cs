﻿using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SimpleShop.Core.Dtos;
using SimpleShop.Core.Model;
using SimpleShop.Service.Interfaces;
using System.Collections;
using System.Net.Mail;
using System.Net;
using Microsoft.AspNetCore.Authorization;
using SimpleShop.Repo.Data;

namespace SimpleShop.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : BaseApiController
    {
        public CategoryController(IRepositoryManager repository, ILoggerManager logger, IMapper mapper) : base(repository, logger, mapper)
        {
        }
        [HttpGet("GetCategories")]
        public async Task<IActionResult> GetCategories()
        {
            var categories = await _repositoryManager.CategoryRepository.GetCategories();
            return Ok( _mapper.Map<List<CategoryDto>>(categories.ToList()));
        }
        [Authorize(Roles = UserRoles.Admin)]
        [HttpPost("add-category")]
        public async Task<IActionResult> AddCategory([FromBody] CategoryDto categoryDto)
        {
            var category = _mapper.Map<Category>(categoryDto);
            await _repositoryManager.CategoryRepository.AddCategory(category);
            return Ok();
        }
    }
    
}

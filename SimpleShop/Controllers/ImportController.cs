﻿using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.FileSystemGlobbing.Internal;
using SharpCompress.Archives.Rar;
using SimpleShop.Core.Model;
using SimpleShop.Repo.Data;
using SimpleShop.Service.Interfaces;
using SimpleShop.Service.Services;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Formats.Webp;
using System.Linq;
using System.Net;
using System.Text.RegularExpressions;
using System.Xml;

namespace SimpleShop.WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize (Roles = UserRoles.Admin)]
    public class ImportController : BaseApiController
    {
        private ImportManager _importService;
        
        public ImportController(IRepositoryManager repository, ILoggerManager logger, IMapper mapper, ImportManager importService) : base(repository, logger, mapper)
        {
            _importService = importService;
        }
        [HttpPost]
        public async Task<IActionResult> ImportProductData(IFormFile importXml,  IFormFile offersXml)
        {
            if (importXml == null || offersXml == null)
                return BadRequest("No file uploaded");

            using (var reader = new StreamReader(importXml.OpenReadStream()))
            {
                var importXmlData = await reader.ReadToEndAsync();
                await _importService.ImportXml(importXmlData);
                
            }

            using (var reader = new StreamReader(offersXml.OpenReadStream()))
            {
                var offersXmlData = await reader.ReadToEndAsync();
                await _importService.OffersXml(offersXmlData);
               
            }
            return Ok();

        }
        [HttpPost("import-image")]
        public async Task<IActionResult> ImportProductImage(IFormFile imageFile)
        {
            try
            {
                if (imageFile == null || imageFile.Length == 0)
                {
                    
                    return BadRequest("Файл изображения не предоставлен или он пуст.");
                }

                // Путь для сохранения оригинального файла
                var webpDirectory = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/static/images");
                if (!Directory.Exists(webpDirectory))
                {
                    return BadRequest("no directory");
                }

                var originalFilePath = Path.Combine(webpDirectory, imageFile.FileName);

                // Сохраняем оригинальный файл на сервере
                using (var stream = new FileStream(originalFilePath, FileMode.Create))
                {
                    await imageFile.CopyToAsync(stream);
                }

                // Путь для сохранения конвертированного файла
                var webpFilePath = Path.Combine(webpDirectory, Path.GetFileNameWithoutExtension(imageFile.FileName.Replace('.', '_')) + ".webp");

                // Конвертируем изображение в WebP
                using (var image = Image.Load(originalFilePath))
                {
                    image.Save(webpFilePath, new WebpEncoder());
                }

                // Удаляем оригинальный файл после конвертации
                if (System.IO.File.Exists(originalFilePath))
                {
                    System.IO.File.Delete(originalFilePath);
                }

                return Ok();
            }
            catch (Exception e)
            {

                return BadRequest("Ошибка: "+ e.Message);
            }
            
        }

    }
}

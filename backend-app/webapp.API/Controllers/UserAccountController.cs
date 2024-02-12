using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization; // Keycloak

namespace webapp.API.Controllers;

[Authorize]
[ApiController]
[Route("[controller]")]
public class UserAccountController : ControllerBase
{
    
    private readonly ILogger<UserAccountController> _logger;
    private readonly IConfiguration _configuration;

    public UserAccountController(ILogger<UserAccountController> logger, IConfiguration configuration)
    {
        _logger = logger;
        _configuration = configuration;
    }

    [HttpGet]
    public async Task<string> GetUsername()
    {
        string username = "kan ikke finde noget..";
        if (HttpContext.User.Identity != null)
        {
            username = HttpContext.User.Identity.Name;
        }
        return username;
    }
}

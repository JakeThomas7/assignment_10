using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using mission10_api.Models;

namespace mission10_api.Controllers;

[ApiController]
[Route("[controller]")]
public class BowlingCotroller : ControllerBase
{

    private BowlingLeagueContext _context;

    public BowlingCotroller(BowlingLeagueContext temp)
    {
        _context = temp;
    }
    
    [HttpGet(Name = "Bowlers")]
    public IEnumerable<Bowler> Get()
    {
        return _context.Bowlers
            .Include(b => b.Team) // Includes the entire Team object
            .ToList();
    }
}
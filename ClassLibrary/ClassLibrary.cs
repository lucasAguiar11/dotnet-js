namespace ClassLibrary;

public class Startup
{
    public async Task<object> Invoke(object input)
    {
        int v = (int)input;
        return Helper.Add(v);
    }
}

static class Helper
{
    public static int Add(int v)
    {
        return v + v;
    }
}
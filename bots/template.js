// You will want to add the script to the HTML "game.html". To setup a bot match, use setup_bots.js and set the BOT_1 and BOT_2
var TemplateBot =
{
    // Call these with "this". Works with the template framework better
    // These are functions
    get_my_x: get_my_x ,
    get_my_y: get_my_y ,
    get_my_item_count: get_my_item_count ,
    get_opponent_x: get_opponent_x ,
    get_opponent_y: get_opponent_y ,
    get_opponent_item_count: get_opponent_item_count ,

    // For the display name
    get_name: function()
    {
        return "TemplateBot"
    } ,

    // For you to use when a new game is started
    new_game: function()
    {
    } ,

    // The function that is called to make a move
    make_move: function()
    {
       return PASS;
    }
}

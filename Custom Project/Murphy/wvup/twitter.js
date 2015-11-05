<a class="twitter-timeline" href="https://twitter.com/WVUParkersburg" data-widget-id="662036651766644736">Tweets by @WVUParkersburg</a>
<script>
	!function(d,s,id){
		var js,fjs=d.getElementsByTagName(s)[0],
		p=/^http:/.test(d.location)?'http':'https';
		if(!d.getElementById(id)){
			js=d.createElement(s);
			js.id=id;js.src=p+"://platform.twitter.com/widgets.js";
			fjs.parentNode.insertBefore(js,fjs);
		}
	}
	(document,"script","twitter-wjs");
</script>
--------------------------------------------------------
$(document).ready(function() {

  var tweets = 3; //specify the number you want here

  $.ajax({

    url: "http://twitter.com/statuses/user_timeline/WVUParkersburg.json?&count=” + tweets +”&callback=?",
    dataType: "json",
    timeout: 15000,

    success: function(data) {
      for (i=0; i<data.length; i++) {
        $("#twitter").append("" + data[i].text);
        $("#twitter").append("" + data[i].created_at +"");
      }
    },

    error: function() {
      alert("Failure!");
    }

  });

});
--------------------------------------------------------
function url2Links(text) {
      var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
      return text.replace(exp,"<a href='$1'>$1</a>"); 
  }
--------------------------------------------------------
  /**
 * Get latest tweet via Twitter API, in JSON format,
 * 
 * Format tweet with working URLs for urls, hashtags, and mentions
 * 
 * @param $user
 */
$user = 'PierceComms'; // case in-sensitive

$json_results = json_decode( file_get_contents( 'https://api.twitter.com/1/statuses/user_timeline/'.$user.'.json?count=1&include_rts=1&callback=?' ) );
$tweet = $json_results[0]->text;

$pattern_hashtag = '/#([\\d\\w]+)/';
$replace_hashtag = '<a href="http://twitter.com/#search?q=%23$1" target="_blank">$0</a>';

$pattern_mention = '#@([\\d\\w]+)#';
$replace_mention = '<a href="http://twitter.com/$1" target="_blank">$0</a>';

$pattern_url = '/http:\/\/([a-z0-9_\.\-\+\&\!\#\~\/\,]+)/i';
$replace_url = '<a href="http://$1" target="_blank">http://$1</a>';

// Replace http://url.com with working URL
// URLs MUST BE REPLACED FIRST
$tweet = preg_replace( $pattern_url, $replace_url, $tweet );
// Replace #hashtags with working URL
$tweet = preg_replace( $pattern_hashtag, $replace_hashtag, $tweet );
// Replace @mentions with working URL
$tweet = preg_replace( $pattern_mention, $replace_mention, $tweet );

echo $tweet;
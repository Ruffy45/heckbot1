function getBotResponse(input) {
    const keywords = ["web","development","app","machine","learning","iot","cyber","security","cloud","computing"];
    //standardization
    input = input.replace(/[&\/\\#^+()$~%.'":*?<>{}!@]/g, '')
    const word = input.split(" ");
    const final = [];
    var n = [];
    words = word.map(v => v.toLowerCase());
    for (i = 0; i < words.length; i++) {
        for (j = 0; j < keywords.length; j++) {
            if (words[i] == keywords[j]) {
                final[i] = keywords[j]
                var n = final.filter(value => Object.keys(value).length !== 0);
            }
        }
    }
    n = n.join(" ")
    if (n.length == 0) {
        result = "x";
    }
    else {
        result = n;
    }
    //Start of dictionary that stores standardized inputs and results
    var1="http://tinyurl.com/2p955ca3"
    
    
    
    var dict = {
        "web development": "Here is a playlist on Web Development: http://tinyurl.com/2p85uyp2, Here are some sites for reference:https://www.freecodecamp.org/ and also https://www.geeksforgeeks.org/",
        "app development": "Here is a playlist on: http://tinyurl.com/4hsvj49a",
        "iot": "Here is a playlist on: http://tinyurl.com/2kjzxtn8",
        "cyber security": "Here is a playlist on: http://tinyurl.com/y32sn5jf",
        "cloud computing": "Here is a playlist on: http://tinyurl.com/3fkwfuyp",
        "machine learning": "Here is a playlist on: http://tinyurl.com/29uwnevr",
       
        "else": "Try another spelling or some other query!"
    }
    return dict[n] || dict["else"]

}
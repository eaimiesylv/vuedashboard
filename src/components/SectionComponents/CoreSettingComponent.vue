<template>
  <section id="core_setting">
    <h4><i class="fas fa-flag"></i>Core Setting</h4>
    <div id="coresetting_wrapper">
      <div class="coresetting-input-container">
        <div>
          <label for="language">Language</label>
          <select id="language">
            <option value="en">&#127468;&#127463; English</option>
          </select>
       </div>
      <div>
        <label for="tone">Tone of Voice</label>
        <select id="tone">
          <option>Friendly</option>
        </select>
      </div>
      <div>
        <label for="pointOfView">Point of View</label>
        <select id="pointOfView">
          <option>None</option>
        </select>
      </div>
      <div>
        <label for="targetCountry">Target Country</label>
        <select id="targetCountry">
          <option>None</option>
        </select>
      </div>
    </div>

      <div class="coresetting-input-container">
        <div id="coresetting_article">
            <label for="articleSize">Article Size</label>
            <div>
            <select id="articleSize">
              <option value="x-small">&#127482;&#127469; X-Small</option>
            </select>
            <p>2400 - 3600 words, 9-12 H2 headings</p>
          </div>
          
        </div>

        

        <p id="coresetting_description">The X-small article offers articles or news, ideal for quick updates and capturing immediate interest, 
          ensuring your content remains fresh and timely in the eyes of your audience.</p>

        <div id="coresetting_details">
          <span class="details">Details to include &#9432;</span>
          <span><a href="#">Sample 1</a></span>
          <span class="pipe">|</span>
          <span><a href="#">Sample 2</a></span>
          <span class="pipe">|</span>
          <span><a href="#">Sample 3</a></span>
        </div>

        <div id="coresetting_checkbox">
          <input type="checkbox" id="intenseMode">
          <label for="intenseMode">Intense mode: to each section, beyond just the entire article</label>
        </div>

        <div id="coresetting_comment">
          <textarea rows="4" placeholder="Your comments..."></textarea>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  #core_setting{
    margin-top:2em;
  }
  #core_setting h4{
    margin:2em 0;
    color:#384D67;
  }
 
  #coresetting_wrapper {
    display: flex;
    justify-content: space-between;
  }

  .coresetting-input-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    padding:0em 2em 2em 0em;
  }
  .coresetting-input-container select{
    width: 85%;
    padding: 8px;
    margin-bottom: 2em;
    box-sizing: border-box;
    border-radius:5px;
    height:4em;
  }
  

  .coresetting-input-container label {
    display:block;
    margin-bottom: 0.5em;
  
}

  #coresetting_article div{
    display: flex;
  }
  #articleSize{
    flex:1;
  }
  #coresetting_details
  {
    margin-top:1em;
  }
  #coresetting_description
  {
    line-height:1.5em;
    font-size:medium;
  }
  #coresetting_article p{
    background:#90A2B9;
    max-height:3.3em;
    box-sizing: border-box;
    justify-content: center;
    margin-left:1em;
    padding:1em
  }
  #coresetting_checkbox{
    display:flex;
    margin:1em;
  }
  #coresetting_comment textarea{
    margin-top:1em;
    width:100%;
    border-radius:3px;
    padding:10px;
  }
  .details {
    margin-right: 10px;
  }

  .pipe {
    margin: 0 5px;
  }
</style>

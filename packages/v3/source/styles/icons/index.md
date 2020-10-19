---
title: Icons
author: bleathem
layout: page
---
PatternFly icons are two dimensional and flat. Most of the icons are gray, with the exception of icons that require color for emphasis.

PatternFly includes custom icons and selections from [IcoMoon &#8211; Free][1] and [FontAwesome][2]. Not all of the FontAwesome icons are recommended for use with PatternFly, but are included for convenience. [Bootstrap Glyphicons][3] are also included in PatternFly, but are not recommended for use. See below for recommendations.

To copy any icon to the clipboard, just click on the icon. To use an icon within desktop applications, install [PatternFlyIcons-webfont.ttf][4] or [FontAwesome.otf][5], set it as the font in your application, and paste the icons into your designs.

You can also download the set of [PatternFly icon SVGs][6].

Search for an icon: <span class="icon-search-container"><input type="text" id="icon-search" placeholder="Search..."/></span>

<div class="icons">
{% capture my_include %}{% include styles/icons/icons.md %}{% endcapture %}
{{ my_include | site_replace | markdownify }}
</div>

<style>
.post_content h2[id], .post_content h3[id], .post_content h4[id], .post_content h5[id], .post_content p[id] {
  margin-top: 0;
  padding-top: 0;
}

.icons table {
  /*width: auto;*/
}

.icon-search-container:before {
  font-family: "FontAwesome";
  content: "\f002";
  position: relative;
  left: 2rem;
}

#icon-search {
  padding-left: 2.5rem;
  width: 12rem;
}

.icons table td:nth-child(1) {
  width: 5rem;
}
</style>

<script>
  // $('table td:nth-child(3),th:nth-child(3)').hide();
  $('td').filter(function () {
    return $(this).parent().children().index(this) < 4;
  }).tooltip({container: 'body'}).attr('title', 'Copy to clipboard').tooltip('fixTitle');
  var clipboard = new Clipboard('td', {
    text: function (trigger) {
      var icon = trigger.querySelector('.pficon, .fa');
      if (icon) {
        var content = window.getComputedStyle(icon, ':before').getPropertyValue('content')
        return content.replace(/"/g, '');
      } else {
        return trigger.innerText;
      }
    }
  });
  clipboard.on('success', function (e) {
    $(e.trigger)
      .attr('title', 'Copied!')
      .tooltip('fixTitle')
      .tooltip('show')
      .attr('title', 'Copy to clipboard')
      .tooltip('fixTitle')
    e.clearSelection()
  });
  clipboard.on('error', function (e) {
    var fallbackMsg = /Mac/i.test(navigator.userAgent) ? 'Press \u2318C to copy' : 'Press Ctrl-C to copy'
    $(e.trigger)
      .attr('title', fallbackMsg)
      .tooltip('fixTitle')
      .tooltip('show')
      .attr('title', 'Copy to clipboard')
      .tooltip('fixTitle')
  });
  $('#icon-search').on('input', function() {
    var text = this.value;
    $('.icons .table tr').each(function() {
      var child = this.children[1];
      var show = text.length === 0
        || child.nodeName === 'TH'
        || child.innerText.toLowerCase().indexOf(text.toLowerCase()) >= 0;
      if (show) {
        $(this).show(100);
      } else {
        $(this).hide(100);
      }
    })
  })
</script>


 [1]: http://icomoon.io/#icons
 [2]: http://fontawesome.io/icons/
 [3]: http://getbootstrap.com/components/#glyphicons
 [4]: https://github.com/patternfly/patternfly/raw/master-dist/dist/fonts/PatternFlyIcons-webfont.ttf
 [5]: https://github.com/patternfly/patternfly/raw/master-dist/dist/fonts/FontAwesome.otf
 [6]: https://rawgit.com/patternfly/patternfly-design/master/styles/icons/patternfly-svg-icons.zip

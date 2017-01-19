require "set"

module Jekyll
  GenerateTitle = lambda { |string|
    string.split('-')
    .each{|i| i.capitalize! if ! ['and', 'or'].include? i }
    .join(' ') unless string.nil?
  }

  class PatternLibrary
    attr_accessor :library, :title, :pages

    def initialize(library)
      @library = library
      @title = GenerateTitle.call(library)
      @pages = Array.new
    end

    def ==(other)
      self.library == other.library
    end

    def <=>(other)
      self.library <=> other.library
    end

    def to_liquid
      {
        'library' => library,
        'title' => title,
        'pages' => pages
      }
    end
  end

  class PatternPage
    attr_accessor :primary, :library, :title, :url, :name, :filename

    def initialize(url)
      @url = url
      parts = url.split('/')
      @primary = parts[1]
      @library = parts[2]
      @name = parts[3]
      @filename = parts[4]
      @title = GenerateTitle.call(@name)
    end

    def ==(other)
      self.url == other.url
    end

    def <=>(other)
      self.url <=> other.url
    end

    def to_liquid
      {
        'url' => url,
        'library' => library,
        'name' => name,
        'title' => title
      }
    end
  end

  class SitePatternPageGenerator < Jekyll::Generator
    def generate(site)
      libs = Hash.new
      site.pages.each do |page|
        parts = page.url.split('/')
        patternPage = PatternPage.new(page.url)
        if ( patternPage.primary == 'pattern-library' &&
             !patternPage.library.nil? &&
             patternPage.library != 'widgets')
          patternLibrary = libs[patternPage.library]
          if (patternLibrary.nil?)
            patternLibrary = PatternLibrary.new(patternPage.library)
            libs[patternLibrary.library] = patternLibrary
          end
          # index files only
          patternLibrary.pages.push(patternPage).sort! if (patternPage.filename.nil?)
        end
      end
      site.config['patternLibraries'] = libs.values.sort
    end
  end
end

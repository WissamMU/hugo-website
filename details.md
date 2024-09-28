to download hugo https://gohugo.io/installation/windows/

create site
to create site go cmd then file location and write hugo new site stieName

folders
archetypes = have default.md Contains filtered files for sites.
content    = Home page content files _index.md to create write in cmd hugo new _index.md
            to create fils here write in cmd hugo new folderNameIfNeeded/fileName.md
data       = data for site read only
layout     = html file for site
resources  = automatically created with site
static     = static asset for site like js font ...
themes     = themes for site
vonfig.toml= site settings

file types
toml       = site settings toml type data get save like this
             name = "value"
yaml       = text file and settings data get save like this
             "key" : "value"
JSON       = save data to read Throughout the site data get save like this
```json
{
    "title" : {
        "name" : "value"
    }
}
```
md         = Markdown is a simple way to format text and add structure to your writing without using complex HTML code.
Common Markdown syntax examples:
1- Headings
# Heading 1
## Heading 2
### Heading 3
2- Emphasis
    **Bold text**
    *Italic text*
    ***Bold and Italic text***
3-Lists:
    Unordered list
* Item 1
* Item 2
* Item 3
    Ordered list
1. Item 1
2. Item 2
3. Item 3
Code blocks
```csharp 
console.writeLine("Hello World!");
```

To summon a function in a huge use {{ function }}
# variable
{{ $variable := "value"}}
and to use the variable {{ $variable}}
we can take variables from content folder +++ myName = "wessam" +++
and use it in latter by identifying it first     {{ $myName := .Params.myName}}
then use it     {{ $myName }}

# if
```go
{{ if eq $var 6 }}
  {{ print "var is 6" }}
{{ else if eq $var 7 }}
  {{ print "var is 7" }}
{{ else if eq $var 42 }}
  {{ print "var is 42" }}
{{ else }}
  {{ print "var is something else" }}
{{ end }}
```
eq : = equal
lt : > less than
le : >= less than or equal 
gt : < greater than
ge : <= greater than or equel


some hugo tools i guess
1. truncate 5 :         used to limit the length of a text content and add an ellipsis (...) 
2. .Site.Data :         This refers to data stored in your project's data directory. Hugo uses this information within your templates.
3. .Site.RegularPages:  This refers to all regular pages in your project, excluding content like posts or drafts. You can use this to access information from those pages.
4. range :              loops through a collection of items, performing actions on each one.
5. .Params.somthing :   Accesses front matter data in Hugo templates.
6. RelPermalink :       Returns the relative URL of the current page in Hugo.

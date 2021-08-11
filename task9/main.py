#!/usr/bin/python3

print("content-type: text/html")
print()

import subprocess as sp 
import cgi 
 
f = cgi.FieldStorage()
cmd = f.getvalue("cmd")
op = sp.getoutput("sudo "+cmd)
print(op)

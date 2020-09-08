rem # Locate the folder containing NodeJS and substitute the path below with it
set nodejsloc=D:/nodejs

START C:\Windows\System32\cmd.exe /k "echo PSO2 Affixing Assistant & echo @author malulleybovo (since 2018) & echo @license GNU General Public License v3.0 & "%nodejsloc%"\nodejs\nodevars.bat & node --eval "require('./updateManager.min.js')" & exit"
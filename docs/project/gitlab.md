# Gitlab


## Configurar tu gitlab para darle acceso a sleakops.

Ingresaar a la url : tugitlab.com/-/profile/applications  y crear una nueva aplicacion llamarla sleakops . 

con los valores:

urlcallback: api.sleakops.com/api/integrations/gitlab/callback/

scope: read

Una vez creada la aplicacion, agregar el `Application ID` y `Secret` de la aplicacion dentro de la configuracion de tu [cuenta](https://console.sleakops.com/settings/authorizations) en sleakops
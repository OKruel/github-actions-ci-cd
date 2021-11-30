FROM alpine:3.11

COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT [ "/entrypoint.sh" ]
# This passes arguments to the command in the ENTRYPOINT
# The goal here is to pass the input from the action.yaml the ENTRYPOINT.
# To pass the input we use the CMD command
#? CMD [ "executable" ]
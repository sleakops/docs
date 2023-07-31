## Base ########################################################################
# Use a larger node image to do the build for native deps (e.g., gcc, python)
FROM node:16.16.0 as base

# Reduce npm log spam and colour during install within Docker
ENV NPM_CONFIG_LOGLEVEL=warn
ENV NPM_CONFIG_COLOR=false

# We'll run the app as the `node` user, so put it in their home directory
WORKDIR /app
# Copy the source code over
COPY --chown=node:node . /app/


# Install (not ci) with dependencies, and for Linux vs. Linux Musl (which we use for -alpine)
COPY package.json yarn.lock ./

RUN yarn --frozen-lockfile

# Switch to the node user vs. root
USER node

# Expose port 4000
EXPOSE 4000
# Start the app in debug mode so we can attach the debugger
CMD ["npm", "start"]

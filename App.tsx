# Render.com конфигурация
services:
  - type: worker
    name: telegram-admin-bot
    env: python
    buildCommand: pip install -r requirements.txt
    startCommand: python admin_bot.py
    envVars:
      - key: BOT_TOKEN
        sync: false
      - key: LOG_CHANNEL_ID
        sync: false

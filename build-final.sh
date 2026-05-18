#!/data/data/com.termux/files/usr/bin/bash

echo "=== KAYAHANOS FINAL BUILD ENGINE ==="

cd android || exit 1

if [ ! -f gradlew ]; then
  echo "ERROR: gradlew missing"
  exit 1
fi

chmod +x gradlew

echo "CLEAN BUILD START"

./gradlew clean assembleDebug

FILE="app/build/outputs/apk/debug/app-debug.apk"

if [ -f "$FILE" ]; then
  echo "BUILD SUCCESS → APK READY"
else
  echo "BUILD FAILED → NO APK"
fi

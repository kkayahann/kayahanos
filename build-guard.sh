#!/data/data/com.termux/files/usr/bin/bash

echo "=== KAYAHANOS BUILD GUARD ==="

cd android

if [ ! -f gradlew ]; then
  echo "Gradle wrapper missing!"
  exit 1
fi

chmod +x gradlew

./gradlew clean assembleDebug

if [ $? -eq 0 ]; then
  echo "BUILD OK"
else
  echo "BUILD FAILED"
fi

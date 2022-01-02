#!/bin/sh

FILENAME=$1
OUTPUTFILE=${FILENAME%.*}

echo $FILENAME $OUTPUTFILE

convert -resize 320 "$FILENAME" "$OUTPUTFILE-320.webp"
echo "created $OUTPUTFILE-320.webp"
convert -resize 480 "$FILENAME" "$OUTPUTFILE-480.webp"
echo "created $OUTPUTFILE-480.webp"
convert -resize 640 "$FILENAME" "$OUTPUTFILE-640.webp"
echo "created $OUTPUTFILE-640.webp"
convert -resize 768 "$FILENAME" "$OUTPUTFILE-768.webp"
echo "created $OUTPUTFILE-768.webp"
convert -resize 960 "$FILENAME" "$OUTPUTFILE-960.webp"
echo "created $OUTPUTFILE-960.webp"
convert -resize 1024 "$FILENAME" "$OUTPUTFILE-1024.webp"
echo "created $OUTPUTFILE-1024.webp"
convert -resize 1280 "$FILENAME" "$OUTPUTFILE-1280.webp"
echo "created $OUTPUTFILE-1280.webp"
convert -resize 1440 "$FILENAME" "$OUTPUTFILE-1440.webp"
echo "created $OUTPUTFILE-1440.webp"

if [ "${FILENAME: -4}" == ".png" ]
then
convert -resize 1024 "$FILENAME" "$OUTPUTFILE-fallback.png"
echo "created fallback $OUTPUTFILE-1024.png"
fi

convert -resize 1024 "$FILENAME" "$OUTPUTFILE-fallback.jpg"
echo "created fallback $OUTPUTFILE-1024.jpg"


# mv $FILENAME "$FILENAME.bak"

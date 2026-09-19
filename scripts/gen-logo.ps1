Add-Type -AssemblyName System.Drawing

function Get-RoundedRectPath([float]$x, [float]$y, [float]$w, [float]$h, [float]$r) {
  $p = New-Object System.Drawing.Drawing2D.GraphicsPath
  $d = $r * 2
  $p.AddArc($x, $y, $d, $d, 180, 90)
  $p.AddArc($x + $w - $d, $y, $d, $d, 270, 90)
  $p.AddArc($x + $w - $d, $y + $h - $d, $d, $d, 0, 90)
  $p.AddArc($x, $y + $h - $d, $d, $d, 90, 90)
  $p.CloseFigure()
  return $p
}

function New-CrossBitmap([int]$size, [string]$outPath) {
  $bmp = New-Object System.Drawing.Bitmap($size, $size)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = 'AntiAlias'
  $g.Clear([System.Drawing.Color]::Transparent)
  $r = [int]($size * 0.197)
  $path = Get-RoundedRectPath 0 0 $size $size $r
  $red = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(220, 38, 38))
  $white = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::White)
  $g.FillPath($red, $path)
  $vW = [int]($size * 0.25)
  $vH = [int]($size * 0.586)
  $hW = [int]($size * 0.586)
  $hH = [int]($size * 0.25)
  $cx = [int]($size / 2)
  $g.FillRectangle($white, $cx - [int]($vW / 2), $cx - [int]($vH / 2), $vW, $vH)
  $g.FillRectangle($white, $cx - [int]($hW / 2), $cx - [int]($hH / 2), $hW, $hH)
  $g.Dispose()
  $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
  $bmp.Dispose()
}

New-CrossBitmap 512 "D:\Project-Me\My-Project\Prima Rescue\public\logo.png"
Write-Output "created logo.png"
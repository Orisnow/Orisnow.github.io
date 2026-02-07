// .vitepress/plugins/image_processor.mts
import sizeOf from 'image-size';
import path from 'path';
import fs from 'fs';

export interface ImageMetadata {
  width: number;
  height: number;
  filesize: string; // 👈 类型改为 string
}

const imageMetaCache = new Map<string, ImageMetadata>();

/**
 * 格式化字节数为可读字符串，严格保留一位小数
 */
function formatBytes(bytes: number) {
  if (bytes === 0) return '0.0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  
  // 计算处于哪个单位层级
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  // 计算数值并保留一位小数
  const val = (bytes / Math.pow(k, i)).toFixed(1);
  
  return `${val} ${sizes[i]}`;
}

export function getImageMetadata(src: string): ImageMetadata {
  try {
    if (/^(https?:)?\/\//.test(src)) return fallback();

    const absPath = resolveImagePath(src);
    if (imageMetaCache.has(absPath)) return imageMetaCache.get(absPath)!;

    const buffer = fs.readFileSync(absPath);
    const dimensions = sizeOf(buffer);
    const stat = fs.statSync(absPath);

    const meta: ImageMetadata = {
      width: dimensions.width ?? 0,
      height: dimensions.height ?? 0,
      filesize: formatBytes(stat.size), // 👈 这里调用转换函数
    };

    imageMetaCache.set(absPath, meta);
    return meta;
  } catch (e) {
    console.warn('[image_processor] failed:', src);
    return fallback();
  }
}

function fallback(): ImageMetadata {
  return { width: 0, height: 0, filesize: 'Unknown' };
}

function resolveImagePath(src: string): string {
  const cleanSrc = src.split(/[?#]/)[0];
  // 刚才你提到 docs/public 有效，那咱们就固定这个路径
  if (cleanSrc.startsWith('/')) {
    return path.resolve(process.cwd(), 'docs/public', cleanSrc.slice(1));
  }
  return path.resolve(process.cwd(), cleanSrc);
}
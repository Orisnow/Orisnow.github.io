import { useRoute, useRouter } from "vitepress";

export function  useNavigation(){
  const route = useRoute()
  const router = useRouter()

  const goToArchives = (filter?: string) => {
    // 自动根据当前语言生成路径：/zh/blog/archives 或 /en/blog/archives
    const pathSegments = route.path.split('/')
    const langPath = pathSegments[1] || 'zh' 
    
    const baseUrl = `/${langPath}/blog/archives`
    const finalUrl = filter ? `${baseUrl}?filter=${filter}` : baseUrl
    
    // 执行跳转
    router.go(finalUrl) 
  }

  return { goToArchives }
}
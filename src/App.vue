<template>
  <div class="app-shell">
    <header class="hero">
      <div>
        <p class="badge">Companion Cloud · 在线语音 / 视频陪聊</p>
        <h1>专业级在线陪聊 APP</h1>
        <p class="subtitle">
          支持实时语音陪聊、在线视频陪聊、智能匹配、日程预约、礼物互动，适用于情感陪伴、语言练习与兴趣社交。
        </p>
      </div>
      <div class="hero-stats">
        <article>
          <strong>24/7</strong>
          <span>在线服务</span>
        </article>
        <article>
          <strong>2000+</strong>
          <span>认证陪聊师</span>
        </article>
        <article>
          <strong>&lt; 3s</strong>
          <span>极速匹配</span>
        </article>
      </div>
    </header>

    <main>
      <section class="panel quick-actions">
        <button :class="{ active: mode === 'voice' }" @click="mode = 'voice'">🎙️ 语音陪聊</button>
        <button :class="{ active: mode === 'video' }" @click="mode = 'video'">📹 视频陪聊</button>
        <button class="primary" @click="startSession">立即开始</button>
      </section>

      <section class="content-grid">
        <article class="panel companions">
          <h2>推荐陪聊师</h2>
          <div class="companion-list">
            <div v-for="item in companions" :key="item.id" class="companion-card">
              <div class="avatar">{{ item.avatar }}</div>
              <div>
                <h3>{{ item.name }}</h3>
                <p>{{ item.tags.join(' · ') }}</p>
                <small>评分 {{ item.rating }} ｜ {{ item.online ? '在线' : '忙碌' }}</small>
              </div>
              <button :disabled="!item.online" @click="book(item)">
                {{ item.online ? '预约' : '离线' }}
              </button>
            </div>
          </div>
        </article>

        <article class="panel session">
          <h2>会话控制台</h2>
          <p>当前模式：<strong>{{ modeLabel }}</strong></p>
          <div class="switches">
            <label><input type="checkbox" v-model="controls.mic" />麦克风</label>
            <label><input type="checkbox" v-model="controls.camera" />摄像头</label>
            <label><input type="checkbox" v-model="controls.noiseReduction" />降噪</label>
          </div>
          <textarea v-model="notes" rows="4" placeholder="记录需求：例如想找英语口语陪练，30分钟..." />
          <p class="status">{{ status }}</p>
        </article>
      </section>

      <section class="panel features">
        <h2>核心功能模块（可直接扩展为生产系统）</h2>
        <ul>
          <li>✅ 实时语音/视频通话入口（前端控制层已完成）</li>
          <li>✅ 陪聊师列表、在线状态、评分展示、预约操作</li>
          <li>✅ 会话设备开关、降噪选项、用户需求记录</li>
          <li>✅ 完整响应式界面（桌面端 / 平板 / 手机）</li>
          <li>✅ 可对接 WebRTC、IM、支付、风控与审核系统</li>
        </ul>
      </section>
    </main>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'

const mode = ref('voice')
const notes = ref('')
const status = ref('待匹配：请选择语音或视频模式并点击“立即开始”。')

const controls = reactive({
  mic: true,
  camera: false,
  noiseReduction: true,
})

const companions = ref([
  { id: 1, avatar: '🧠', name: '林语', tags: ['情绪陪伴', '深夜倾听'], rating: '4.9', online: true },
  { id: 2, avatar: '🌍', name: 'Mia', tags: ['英语口语', '海外生活'], rating: '4.8', online: true },
  { id: 3, avatar: '🎮', name: '阿泽', tags: ['游戏开黑', '轻松聊天'], rating: '4.7', online: false },
])

const modeLabel = computed(() => (mode.value === 'voice' ? '语音陪聊' : '视频陪聊'))

function startSession() {
  status.value = `正在为你匹配${modeLabel.value}顾问，请稍候（已开启：${controls.mic ? '麦克风' : '静音'}${
    controls.camera ? ' + 摄像头' : ''
  }）`
}

function book(item) {
  status.value = `已提交与 ${item.name} 的${modeLabel.value}预约请求。`
}
</script>

<style scoped>
:global(body) {
  margin: 0;
  font-family: 'Inter', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  background: radial-gradient(circle at top, #312e81 0%, #0f172a 45%, #020617 100%);
  color: #e2e8f0;
}

.app-shell {
  max-width: 1120px;
  margin: 0 auto;
  padding: 24px;
}

.hero {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  align-items: flex-start;
  margin-bottom: 24px;
}

.badge {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(14, 165, 233, 0.2);
  border: 1px solid rgba(125, 211, 252, 0.5);
  font-size: 13px;
}

h1 {
  margin: 12px 0;
  font-size: 42px;
}

.subtitle {
  color: #cbd5e1;
  max-width: 700px;
  line-height: 1.6;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  gap: 10px;
}

.hero-stats article,
.panel {
  background: rgba(15, 23, 42, 0.75);
  border: 1px solid rgba(148, 163, 184, 0.24);
  border-radius: 16px;
  backdrop-filter: blur(8px);
}

.hero-stats article {
  padding: 14px;
  text-align: center;
}

.hero-stats strong {
  display: block;
  font-size: 24px;
}

.hero-stats span {
  color: #94a3b8;
  font-size: 13px;
}

.panel {
  padding: 18px;
}

.quick-actions {
  display: flex;
  gap: 12px;
  margin-bottom: 18px;
}

button {
  background: #1e293b;
  color: #e2e8f0;
  border: 1px solid #334155;
  border-radius: 12px;
  padding: 10px 16px;
  cursor: pointer;
}

button.active,
button.primary {
  background: linear-gradient(135deg, #22d3ee, #6366f1);
  border: none;
  color: white;
}

button:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.content-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 16px;
}

.companion-list {
  display: grid;
  gap: 12px;
}

.companion-card {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 12px;
  align-items: center;
  padding: 12px;
  border-radius: 12px;
  background: rgba(51, 65, 85, 0.45);
}

.avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 24px;
  background: rgba(15, 23, 42, 0.95);
}

h2 {
  margin: 0 0 14px;
}

h3 {
  margin: 0;
}

p {
  margin: 6px 0;
}

small {
  color: #93c5fd;
}

.switches {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin: 12px 0;
}

textarea {
  width: 100%;
  box-sizing: border-box;
  border-radius: 12px;
  border: 1px solid #334155;
  background: rgba(15, 23, 42, 0.8);
  color: #f8fafc;
  padding: 10px;
}

.status {
  margin-top: 12px;
  color: #67e8f9;
}

.features ul {
  margin: 0;
  padding-left: 20px;
  line-height: 1.8;
}

@media (max-width: 900px) {
  .hero,
  .content-grid {
    grid-template-columns: 1fr;
    display: grid;
  }

  .hero-stats {
    grid-template-columns: repeat(3, 1fr);
  }

  h1 {
    font-size: 32px;
  }
}
</style>

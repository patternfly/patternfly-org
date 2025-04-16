import os
import json
import requests
from datetime import datetime

# Get configuration from environment variables
SLACK_TOKEN = os.environ.get("SLACK_TOKEN")
CHANNEL_ID = os.environ.get("CHANNEL_ID")
ROTATION_FILE = "rotation_state.json"

def get_channel_members():
    """Get all members in the channel, excluding specific users."""
    url = "https://slack.com/api/conversations.members"
    headers = {"Authorization": f"Bearer {SLACK_TOKEN}"}
    params = {"channel": CHANNEL_ID}
    
    response = requests.get(url, headers=headers, params=params)
    data = response.json()
    
    if not data.get("ok"):
        print(f"Error getting channel members: {data.get('error')}")
        return []
    
    # Get all members
    all_members = data.get("members", [])
    
    # Get excluded users from environment variable
    excluded_users_str = os.environ.get("EXCLUDED_USERS", "")
    excluded_users = [user.strip() for user in excluded_users_str.split(",") if user.strip()]
    
    # Filter out excluded users
    eligible_members = [user for user in all_members if user not in excluded_users]
    
    print(f"Found {len(eligible_members)} eligible members out of {len(all_members)} total members")
    return eligible_members

def get_rotation_state():
    """Get current rotation state from file or initialize if not exists."""
    try:
        if os.path.exists(ROTATION_FILE):
            with open(ROTATION_FILE, "r") as f:
                return json.load(f)
    except:
        pass
    # Default state if file doesn't exist or can't be read
    return {"last_index": -1, "last_user": None}

def save_rotation_state(state):
    """Save rotation state to file."""
    with open(ROTATION_FILE, "w") as f:
        json.dump(state, f)
    # Add git commands to commit changes
    os.system('git config --global user.name "GitHub Actions Bot"')
    os.system('git config --global user.email "actions@github.com"')
    os.system('git add rotation_state.json')
    os.system('git commit -m "Update rotation state [skip ci]"')
    os.system(f'git push https://{os.environ.get("GITHUB_TOKEN")}@github.com/{os.environ.get("GITHUB_REPOSITORY")}.git HEAD:main')

def get_user_info(user_id):
    """Get user information from Slack."""
    url = "https://slack.com/api/users.info"
    headers = {"Authorization": f"Bearer {SLACK_TOKEN}"}
    params = {"user": user_id}
    
    response = requests.get(url, headers=headers, params=params)
    data = response.json()
    
    if not data.get("ok"):
        print(f"Error getting user info: {data.get('error')}")
        return {}
    
    return data.get("user", {}).get("profile", {})

def send_message(channel, text):
    """Send a message to a Slack channel."""
    url = "https://slack.com/api/chat.postMessage"
    headers = {
        "Authorization": f"Bearer {SLACK_TOKEN}",
        "Content-Type": "application/json"
    }
    payload = {
        "channel": channel,
        "text": text
    }
    
    response = requests.post(url, headers=headers, json=payload)
    if not response.json().get("ok"):
        print(f"Error sending message: {response.json().get('error')}")

def update_user_status(user_id):
    """Update user's status to indicate they're the monitor."""
    url = "https://slack.com/api/users.profile.set"
    headers = {
        "Authorization": f"Bearer {SLACK_TOKEN}",
        "Content-Type": "application/json"
    }
    
    # Set an emoji and status text
    payload = {
        "user": user_id,
        "profile": {
            "status_text": "Slack Monitor This Week",
            "status_emoji": ":eyes:",
            "status_expiration": 0  # Won't expire automatically
        }
    }
    
    response = requests.post(url, headers=headers, json=payload)
    if not response.json().get("ok"):
        print(f"Error updating status: {response.json().get('error')}")

def update_monitor_alias(new_monitor_id):
    """Update the bot's profile to indicate current monitor."""
    user_info = get_user_info(new_monitor_id)
    user_name = user_info.get("real_name", "Unknown User")
    
    # Set the bot's profile to reference the current monitor
    url = "https://slack.com/api/users.profile.set"
    headers = {
        "Authorization": f"Bearer {SLACK_TOKEN}",
        "Content-Type": "application/json"
    }
    
    payload = {
        "profile": {
            "real_name": f"PatternFly Slack Monitor ({user_name})",
            "status_text": f"Currently: {user_name}",
            "status_emoji": ":eyes:",
        }
    }
    
    response = requests.post(url, headers=headers, json=payload)
    if not response.json().get("ok"):
        print(f"Error updating bot profile: {response.json().get('error')}")
    
    # Add message in channel about how to tag the current monitor
    message = f"<@{new_monitor_id}> is this week's slack-monitor! You can use @patternfly-slack-monitor to tag them."
    send_message(CHANNEL_ID, message)

def notify_new_monitor(user_id):
    """Send notification to channel about new monitor."""
    message = (
        f"<@{user_id}> has been assigned as this week's slack-monitor! "
        f"They'll be responsible for monitoring the slack channels according to the document pinned to the top of this channel."
    )
    send_message(CHANNEL_ID, message)

def assign_slack_monitor():
    """Main function to assign a new slack monitor."""
    print(f"Running slack monitor rotation on {datetime.now()}")
    
    # Get all channel members
    members = get_channel_members()
    if not members:
        print("No eligible members found in channel")
        return
    
    # Get current rotation state
    state = get_rotation_state()
    
    # Select next member
    next_index = (state["last_index"] + 1) % len(members)
    next_user = members[next_index]
    
    # Update rotation state
    state["last_index"] = next_index
    state["last_user"] = next_user
    save_rotation_state(state)
    
    # Send message to channel
    notify_new_monitor(next_user)
    
    # Update user status (optional)
    update_user_status(next_user)
    
    # Update bot profile for alias functionality
    update_monitor_alias(next_user)
    
    print(f"Successfully assigned {next_user} as the new slack monitor")

if __name__ == "__main__":
    assign_slack_monitor()
